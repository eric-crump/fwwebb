import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Contentstack from "contentstack";
Contentstack.Utils.addEditableTags();

const Stack = Contentstack.Stack({
    "api_key": "bltc321502fa08a9e97",
    "delivery_token": "cs382043d637c9a71c56d27463",
    "environment": "preview",
    live_preview: {
      management_token: 'cs072f951d7f49c838d6e512e7',
      enable: true,
      host: 'api.contentstack.io',
    }
  });

  
  ContentstackLivePreview.init({
    stackSdk: Stack,
    clientUrlParams: {
        protocol: "https",
        host: "app.contentstack.com",
        port: 443,
    },
  });
  
  export default {
    getElement(id, type) { 
      return new Promise((resolve, reject) => {
        const Query = Stack.ContentType(type)
          .Entry(id)
          .toJSON()
          .fetch()
          .then(
            function success(entry) {
              //console.log('entry', entry);
              Contentstack.Utils.addEditableTags(entry, type, true);
              resolve(entry);
            },
            function error(err) {
              console.log('error id', id);
              reject(err);
            }
          );
      });
    },
    
    getElementWithRefs(id, type, references) {
      return new Promise((resolve, reject) => {
        const Query = Stack.ContentType(type)
          .Entry(id)
          .includeReference(...references)
          .toJSON()
          .fetch()
          .then(
            function success(entry) {
              //console.log('entry', entry);
              Contentstack.Utils.addEditableTags(entry, type, true);
              resolve(entry);
            },
            function error(err) {
              console.log('error id', id);
              reject(err);
            }
          );
      });
    },
    // get nav call
    getStack(){
      return Stack;
    }
  };
  
  export const onEntryChange = ContentstackLivePreview.onEntryChange;