type stringArray = Array<string>;

function joinDir(...paths:stringArray):string {
    function checkPathType(path: any): boolean{
        if (!(path instanceof String)) {
            return false;
        } else {
            return true;
        }
    }
    if (!paths.length || paths.some((p) => !checkPathType(p))) throw new TypeError('Invalid Path Types | Paths not found');
    let i = 0;
    let path: string;
    for (; i < paths.length; i++){
        if (i = 0) {
            path += `${paths[i]}`
        } else {
            path += `/${paths[i]}`
        }
    }
    return path;
}
