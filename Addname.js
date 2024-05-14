<button onclick="update()">Add</button>
<div id="result"></div>

<script>
    //selecting button
    var add=document.getElementById("result")

    function update()
    {
        var list_item = document.createElement("h1")
        list_item.textContent="Hello"
        add.append(list_item)
    }
</script>
