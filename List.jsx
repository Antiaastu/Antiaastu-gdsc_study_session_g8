import "./List.css"
const List=[{
    id: '1',
    name:"Anteneh Getnet"
},
{
    id: '2',
    name:"Amanuel Firew"
},{
    id: '3',
    name:"Amanuel Addisu"
},
{
    id: '4',
    name:"Andinet Dereje"
},{
    id: '5',
    name:"Ammar Mohammed"
},
{
    id: '6',
    name:"Ariyam Yilma"
},{
    id: '7',
    name:"Alem Ayalew"
},
{
    id: '8',
    name:"Afomia Dugassa"
},{
    id: '9',
    name:"Agumas Desalew"
},
{
    id: '10',
    name:"Amanuel Mandefrow"
},
];
const  Listpeople =()=>(
    <table>
       <div className="group-members">
         <h1>list of  gdsc react group 6  students</h1>
        <tr> <th class="list">ID</th> <th class="list">Name</th></tr>
        { List.map(item=>(
            <tr  key= { item.id}>
                <td class="list">{item.id}</td>
                <td  class="list">{item.name}</td>
            </tr>
        ))}
        </div>
    </table>
)
export default Listpeople;
