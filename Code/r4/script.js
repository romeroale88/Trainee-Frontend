var lista = document.getElementById('tabla')
fetch('http://api.weatherstack.com/current?access_key=3b27cafe6ec75837756701ae0de9bf77&query=london'
)
.then(response => response.json())
.then(data =>{
    main(data)
})
function main(data){
    tabla(data)
}

function tabla(data) {
    console.log(data)
    var table = document.createElement('table')
    table.innerHTML=`
    <thead>
        <tr>
            <th>Country</th>
            <th>Name</th>
            <th>Region</th>
            <th>Time zone</th>
            <th>Language</th> 
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${data.location.country}</td>
            <td>${data.location.name}</td>
            <td>${data.location.region}</td>
            <td>${data.location.timezone_id}</td>
            <td>${data.request.language}</td>
        </tr>
    </tbody>`
    lista.appendChild(table)
}