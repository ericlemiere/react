export default{
    name:'education',
    title:'Education',
    type: 'document',
    fields:[
        {
            name:'school',
            title:'School',
            type:'string'
        },
        {
            name:'degree',
            title:'Degree',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}