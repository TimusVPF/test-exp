import { Injectable } from '@nestjs/common';

import { JSONOutput, data } from 'src/domain/global/utils/output-encoder';

@Injectable()
export class AppService {
    public constructor() {
        // Do nothing.
    }

    public getHello(): JSONOutput<any> {
        return data({
            message: 'Hello, world!',
        });
    }
}
