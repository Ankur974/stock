fetch('http://http://3.108.225.220:5000/api/user-access-token',{
    method: 'GET',
    
})
.then((response) => response.json())
.then((data)=>{
    console.log('Success:',data.token);
    fetch('http://3.108.225.220:5000/api/data, {
        method: 'GET',
        headers:{
            'user-acccess-token: data,'
        },
    })
    .then((response2)=>response2.json())
    .then((data2) => {
        console.log('Success',data2);
    })
    .catch(error2) => {

    })
}) 
.catch((error) => {console.error('Error:',error);})

