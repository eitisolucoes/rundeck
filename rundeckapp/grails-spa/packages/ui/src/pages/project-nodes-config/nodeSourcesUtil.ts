import { client } from '../../services/rundeckClient'

import {
  getRundeckContext,
  RundeckContext
} from "@rundeck/ui-trellis"

export interface NodeSourceResources {
  href: string
  editPermalink?: string
  writeable: boolean
  description?: string
  syntaxMimeType?:string
  empty?: boolean
}
export interface NodeSource {
  index: number
  type: string
  resources: NodeSourceResources
  errors?:string
}
export async function getProjectNodeSources(): Promise<NodeSource[]> {

  const rundeckContext = getRundeckContext()
  const resp = await client.sendRequest({
    pathTemplate: '/api/{apiVersion}/project/{projectName}/sources',
    pathParameters: rundeckContext,
    baseUrl: rundeckContext.rdBase,
    method: 'GET'
  })
  if (!resp.parsedBody) {
    throw new Error(`Error getting node sources list for ${rundeckContext.projectName}`)
  }
  else {
    return resp.parsedBody as NodeSource[]
  }
}

export async function createProjectAcl(name: string, aclContent: string): Promise<any> {
  const rundeckContext = getRundeckContext()
  const resp = await client.sendRequest({
    pathTemplate: '/api/{apiVersion}/system/acl/{aclName}',
    pathParameters: {aclName: name, apiVersion: rundeckContext.apiVersion},
    baseUrl: rundeckContext.rdBase,
    body: aclContent,
    method: 'POST'
  })
  if (!resp.parsedBody) {
    throw new Error(`Error creating acl for project ${rundeckContext.projectName}`)
  }
  else {
    return resp.parsedBody
  }

}
