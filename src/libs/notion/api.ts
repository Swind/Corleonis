import { parse } from "url"
import { URLSearchParams } from "url"

/*
 * URL Example
 * https://www.notion.so/99623ef9630940cdb8524ba355831677?v=8366741ca7dd4b339c19484712e13563
 */

const getUrlBlockId = (url: string): string | undefined => {
  const urlObj = parse(url)
  if (urlObj !== undefined && urlObj.pathname !== undefined) {
    let pathList = urlObj.pathname.split('/')
    return pathList[pathList.length - 1]
  }

  return undefined
}

const getBlockHashId = (blockId: string): string => {
  return blockId.split('-').join('')
}

const getFullBlockId = (blockId: string): string => {
  if (typeof blockId !== 'string') {
    throw Error(`blockId: ${typeof blockId} must be string`)
  }

  if (blockId.match("^[a-zA-Z0-9]+$")) {
    let tokens = blockId.match(/.{1,8}/g)
    if (tokens !== null) {
      return tokens.join('-')
    }
  }

  throw Error(`Can't get the full block id from ${blockId}`)
}
