export default function isExternal(link:string) {
    return (link.split('/')[0] === "https:"? true : false);
}
