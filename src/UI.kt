import kotlin.browser.document

class UI(val board: Board) {


    companion object {
        val NO_ANIMATION = "NO_ANIMATION"
        val ANIMATION_SOUTH = "south"
        val ANIMATION_NORTH = "north"
        val ANIMATION_WEST = "west"
        val ANIMATION_EAST = "east"
        val ANIMATION_POPIN = "popin"

    }


    init {
       update()
    }

    fun update(){
        var innerHTML= "<table>"
        for (row in board.board){
            innerHTML += "<tr>"
            for (cell in row){
                var animation = "";
                if(cell.tile != null){
                    when (cell.tile!!.animation){
                        Tile.ANIMATION_EAST -> animation = ANIMATION_EAST;
                        Tile.ANIMATION_WEST -> animation = ANIMATION_WEST;
                        Tile.ANIMATION_NORTH -> animation = ANIMATION_NORTH;
                        Tile.ANIMATION_SOUTH -> animation = ANIMATION_SOUTH;
                        Tile.ANIMATION_POPIN -> animation = ANIMATION_POPIN
                    }
                }
                innerHTML += "<td>" +
                        "<div style=\"background-color:"+cell.getColor()+";" +
                            "\" class=\"content  "+ animation+"\">" +
                            ""+cell.getPrintable() +"</div>" +
                            "</td>";

            }
            innerHTML += "</tr>"
        }
        innerHTML += "</table>";
        document.body!!.innerHTML = innerHTML;
    }
}