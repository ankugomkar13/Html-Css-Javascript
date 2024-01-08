const handleOpenSidebar =()=>{
    document.getElementById("sidebar").style.display="block"
}

const handleCloseSidebar =()=>{
    document.getElementById("sidebar").style.display="none"
}

$.ajax({
    url: `https://dummyjson.com/product`,
    type: `get`,
    datatype : 'json',
    success : function (response)
    {
        console.log(response);
    },
    error: function (error)
    {
        console.log(error)
    },
    always : function(){
        
    }
        
    })
