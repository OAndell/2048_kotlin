import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.get
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
        document.bgColor = "#F5F5F5"
        update()
    }

    fun update(){
        if(board.hasLost){
            showLoss();
            return;
        }
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
        //document.body!!.innerHTML = innerHTML
        val game = document.getElementById("game") as HTMLDivElement
        game.innerHTML = innerHTML

    }

    fun showLoss(){
        val info = document.getElementById("info") as HTMLDivElement
        info.innerHTML = "<h3> You lost. Refresh page to replay"
        document.bgColor = "FFAA12"
    }
}

