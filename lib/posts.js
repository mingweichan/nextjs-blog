import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'


const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData(){
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        console.log(id)

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)
        const content = matterResult.content

        return {
            id,
            content,
            ...matterResult.data,
        }
    })
    return allPostsData.sort((a, b) => {
        if (a.date < b.date)
            return 1
        else 
            return -1
    })
}

//from the posts folder, for each file, return an object with the id of that post
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/.md$/, '')
            }
        }
    })

}

//read the file contents from each post, use matter to parse the headings and return the post id, and post data
export async function getPostData(id){
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()
    return {
        id,
        contentHtml,
        ...matterResult.data
    }

}

