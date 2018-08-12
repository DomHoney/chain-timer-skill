import {RequestHandler, HandlerInput, SkillBuilders} from 'ask-sdk-core';
import {RequestEnvelope, Response} from 'ask-sdk-model'

class LaunchRequestHandler implements RequestHandler {

    canHandle(handlerInput: HandlerInput): Promise<boolean> | boolean {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    }

    handle(handlerInput: HandlerInput): Promise<Response> | Response {
        const speechText = 'Welcome to the Chain Timer skill!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }

}

const handler = async function f(envelope: RequestEnvelope, context: any) {
    const skill = SkillBuilders.custom().addRequestHandlers(
        new LaunchRequestHandler()
    ).create();

    return skill.invoke(envelope, context);
};


export default {"handler": handler}