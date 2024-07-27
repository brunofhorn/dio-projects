import { PodcastTransferModel } from "../models/filter-podcast-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async ():Promise<PodcastTransferModel> => {
    
    const data = await repositoryPodcast()

    let responseFormat : PodcastTransferModel = {
        statusCode: 0,
        body:[]
    }

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent

    responseFormat.body = data




    return responseFormat
}