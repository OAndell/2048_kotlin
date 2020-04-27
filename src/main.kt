import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.KeyboardEventInit
import kotlin.browser.document

fun main(args: Array<String>) {
    val board = Board(4)
    val ui = UI(board)
    board.print()


    document.addEventListener("keydown", { event: Event ->
        if (event is KeyboardEvent) {
            when (event.keyCode) { //WASD
                87 -> board.move(board.DIRECTION_NORTH)
                83 -> board.move(board.DIRECTION_SOUTH)
                68 -> board.move(board.DIRECTION_EAST)
                65 -> board.move(board.DIRECTION_WEST)
            }
            ui.update()
            println(event.keyCode);
        }
    });
}