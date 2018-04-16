import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './src/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);