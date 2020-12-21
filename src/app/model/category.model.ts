export class Category {
    id:number;
    categoryName:string;
    categoryType:string;
    constructor(id : number, categoryName : string,categoryType : string){
        this.id = id;
        this.categoryName = categoryName;
        this.categoryType = categoryType;
    } 
}
