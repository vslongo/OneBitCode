function group(){
    console.log('Export nomeado não-inline (agrupado)')
}

function exportDefault(){
    console.log('export default não-inline')
}

export { group }
export default exportDefault 