export default class Project {
    id = ""
    link = "";
    name = "";
    description = "";
    imageUrl = "";
    pubDate = "";

    constructor(initializer) {
        this.id = initializer.id;
        this.name = initializer.name;
        this.description = initializer.description;
        this.imageUrl = initializer.imageUrl;
        this.pubDate = initializer.pubDate
        this.link = initializer.link;
    }
}
