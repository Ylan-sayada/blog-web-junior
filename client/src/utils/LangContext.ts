import React from 'react'
const LangContext = React.createContext({});
export const langData = {
    "heb":{
        "Home":{
            "ArticleWidgetGenerator" :{
                    "latest":"פוסטים אחרונים",
                    "oldest" : "פוסטים ישנים",
                    "hotest" : "להיטים"
                }
        }
    },
    "eng":{
        "Home":{
            "ArticleWidgetGenerator" :{
                "latest":"פוסטים אחרונים",
                "oldest" : "פוסטים ישנים",
                "hotest" : "להיטים"
                }
        }
    }

};
export const LangProvider = LangContext.Provider;
export const LangConsumer = LangContext.Consumer;
export default LangContext;
