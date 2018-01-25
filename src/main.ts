/*
Improvement of coding style that don’t concern a file in particular :

1. Services folder : too many files. Consider creating sub-folders when a folder reaches seven or more files

2. Entire app: Hide distracting, irrevelant files such as generated .js an .js.map files

3. Is the difference between the features and the pages folder noticeable ?

4. No SharedModule ? No CoreModule ?

5. General : put spaces between different groups of elements (between properties and methods for example)

6. uikit folder has nothing to do in the src folder. All coding that you didn’t write should not cluttering src

7. Not all ngOnInit() are implemented
*/

/// <reference path="typings.d.ts"/>


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));

