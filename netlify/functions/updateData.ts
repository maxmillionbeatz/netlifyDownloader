// YOUR_BASE_DIRECTORY/netlify/functions/test-function.ts

import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { HTTPDL } from '../../src/lib/httpsdl'
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    console.log("Received event:", event);

    HTTPDL()
    return {
        statusCode: 200,
    };
};

export { handler };

