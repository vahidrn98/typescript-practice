function addNums(a:number,b:number|string):string{
    return `${a}${b}`;
}

export function getNum (user:{name:string,lastName:string}):string{
    return `${user?.name ?? "unknown"}${user?.lastName ?? "unknown"}`;
}

export default addNums;