import kotlin.browser.document

class UI(val board: Board) {


    init {
       update()
    }

    fun update(){
        var innerHTML= "<table>"
        for (row in board.board){
            innerHTML += "<tr>"
            for (cell in row){
                innerHTML += "<td><div style=\"background-color:"+cell.getColor()+";\" class=\"content\">"+cell.getPrintable() +"</div></td>";
            }
            innerHTML += "</tr>"
        }
        innerHTML += "</table>";

        document.body!!.innerHTML = innerHTML;
    }
}