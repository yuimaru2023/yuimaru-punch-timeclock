export default function Sortdata(p) {
    let box = []
    for (const key in p) {    box.push({[key]:p[key]})    }
        let result = box.sort((a, b) => {        
        return Object.keys(a)[0].localeCompare(Object.keys(b)[0], 'ja');
    });

    return result
}