export interface Platform{
  name:string;
  url:string;
  logoOfficial:string;
  logo:string;
  text:string;
  properties?:any;
}
export interface Platforms { // plural
  twitter:Platform;
  facebook:Platform;
  googlePlus:Platform;
  pinterest:Platform;
  reddit:Platform;
  linkedin:Platform;
  stumbleUpon:Platform;
  tumblr:Platform;
  mail:Platform;
}

export const platforms:Platforms = {
  twitter : {
              name: 'twitter',
              url: 'https://twitter.com/intent/tweet?url=',
              logoOfficial:'twitter',
              logo:'twitter',
              text:'Tweet',
              properties:{
                text:'title',
                via:'via',
                hashtags:'hashtags'
              }
            },
  googlePlus : {
              name: 'google-plus',
              url: 'https://plus.google.com/share?url=',
              logoOfficial:'google-plus',
              logo:'google-plus',
              text:'Share',
            },
  facebook : {
              name:'facebook',
              url: 'https://www.facebook.com/sharer/sharer.php?u=',
              logoOfficial:'facebook',
              logo:'facebook',
              text:'Share',
          },
  reddit : {
              name: 'reddit',
              url: 'https://www.reddit.com/submit?url=',
              logoOfficial:'reddit-alien',
              logo:'reddit',
              text:'Submit',
              properties:{
                title:'title'
              }
          },
  pinterest:{
              name:'pinterest',
              url: 'https://pinterest.com/pin/create/button/?url=',
              logoOfficial:'pinterest-p',
              logo:'pinterest-lean',
              text:'Pin',
              properties:{
                description:'title',
                media:'image'
              }
        },
  linkedin : {
              name:'linkedin',
              url: 'https://www.linkedin.com/shareArticle?mini=true&url=',
              logoOfficial:'linkedin',
              logo:'linkedin2',
              text:'Share',
              properties:{
                title:'title'
              }
        },
  stumbleUpon : {
              name:'stumbleUpon',
              url: 'https://www.stumbleupon.com/submit?url=',
              logoOfficial:'stumbleupon',
              logo:'stumbleupon',
              text:'stumbleupon',
              properties:{
                title:'title'
              }
  },
  tumblr : {
              name:'tumblr',
              url: 'https://www.tumblr.com/share/link?url=',
              logoOfficial:'tumblr',
              logo:'tumblr2',
              text:'Share',
              properties:{
                title:'title',
                caption:'description'
              }
        },
  mail : {
              name: 'mail',
              url:  'mailto:hotmaps2020@gmail.com?subject=',
              logoOfficial:'envelope',
              logo: 'mail',
              text: 'Mail',
        }
}
