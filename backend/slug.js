import slugify from "slugify"

export default (str)=> {
    if(str.length > 48){
        return slugify(str.slice(0, 48))
    }
    else return slugify(str)
}