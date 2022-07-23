import EN from '/public/Lang/En/translate.json'
import KH from '/public/Lang/Kh/translate.json'

export const translateLauguage= (lang) => {
    
    let language = JSON.parse(JSON.stringify(EN))
    if(lang==='kh'){
        language = JSON.parse(JSON.stringify(KH))
    }

    const t=(e)=>{
        return language[e]
    }

    return {t}
}