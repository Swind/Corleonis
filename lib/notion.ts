import { Client } from "@notionhq/client"

let NOTION_TOKEN=""
let NOTION_TABLE_ID=""

const notion = new Client({
    auth: NOTION_TOKEN
})

export const getDatabase = async (databaseId: string) => {
    const resp = await notion.databases.query({
        database_id: databaseId
    })
    return resp.results
}

export const getPage = async (pageId: string) => {
    const resp = await notion.pages.retrieve({
        page_id: pageId
    })

    return resp
}

export const getBlocks = async (blockId: string) => {
    const resp = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50
    })

    return resp.results
}
