import React from 'react';

export default class Decorators extends{

    constructor() {
        this.HANDLE_REGEX = /\@[\w]+/g;
        this.HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;
    }


}