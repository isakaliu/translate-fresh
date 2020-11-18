## Getting Started
Run npm install translate-fresh to install the library to your 
node modules

## Step 1 
In angular.json at the assets add the Languages directory
````
"assets": [
             "src/favicon.ico",
             "src/assets",
             "src/Languages"
           ],
````
## Step 2
Then create a directory with name Languages in your app folder

Create a file EN.json in your src/Languages directory and create a json object as example
````
{
    "HOME": "Home"
}
````
Create a file SQ.json in your src/Languages directory and create a json object as example for second language
````
{
    "HOME": "Fillimi"
}
````

## Step3
Import at the top the service
````
import {TranslateFreshService} from 'translate-fresh'
````

Import the service in your constructor at the navbar component you can use this in all your components
````
constructor(private translate: TranslateFreshService)
````

## Step4
create a param called Language and a param defaultLang
in your component
````
Language: any
defaultLang: string
````
## Step5
onInit subscribe to
````
this.translate.defaultLanguage.subscribe(locale => {
      this.translate.getLanguageValues();
      this.defaultLang = locale;
    })
    this.translate.Language.subscribe(data => {
      this.Language = data;
    });
````


## Step 6 

Create a dropdown section to change the language and call the onChange method and call the changeLanguage function to switch the languge as shown below in step 7 // place this in your navbar
````
<div class="form-group">
 <select class="custom-select" name="selectedLanguage" #selectedLanguage (change)="changeLanguage(selectedLanguage)" [(ngModel)]="defaultLang">
  <option value="SQ">SQ</option>
  <option value="EN">EN</option>
 </select> 
</div> 
````
place this in your navbar 

## Step 7
````
<h5 >{{Language.HOME }}</h5>
````
this is how you can access your param language
for translations

## Step 8 
Create this method in you navbar component
````
changeLanguage(selectedLanguage): any{
    this.translate.defaultLanguage.next(selectedLanguage.value);
    localStorage.setItem('language', selectedLanguage.value);
  }
````

Feel free to ask if something is unclear 
isak.aliiu@gmail.com
