import kotlin.js.Math

class Board(size:Int) {

    val DIRECTION_SOUTH = "SOUTH"
    val DIRECTION_NORTH = "NORTH"
    val DIRECTION_WEST = "WEST"
    val DIRECTION_EAST = "EAST"



    var board = ArrayList<ArrayList<Cell>>();
    var hasLost = false;

    init{
        for (i in 0 until size){
            board.add(ArrayList<Cell>());
            for(j in 0 until size){
                board[i].add(Cell(i,j))
            }
        }

        addNewTile()
    }


    fun move(direction: String){
        if(direction == DIRECTION_EAST){
            moveEast()
        }
        else if(direction == DIRECTION_WEST){
            moveWest()
        }
        else if(direction == DIRECTION_NORTH){
            moveNorth()
        }
        else if(direction == DIRECTION_SOUTH){
            moveSouth()
        }
        addNewTile();
    }

    fun addNewTile(){
        val emptyCells = ArrayList<Cell>()
        for (row in board){
            for (cell in row){
                if(cell.tile ==null){
                    emptyCells.add(cell)
                }
            }
        }
        if(emptyCells.isEmpty()){
            loseGame()
        }else{
            val randomIndex = (Math.random() * ((emptyCells.size) - 1)).toInt()
            emptyCells.get(randomIndex).tile = Tile();
            emptyCells.get(randomIndex).tile!!.animation = Tile.ANIMATION_POPIN;
        }
    }

    private fun moveEast(){
        for (y in 0 until board.size){
            var stack = ArrayList<Tile>();
            for(x in board.size-1 downTo 0) {
                if(board[y][x].tile != null){
                    board[y][x].tile!!.animation = Tile.ANIMATION_EAST;
                    stack.add(board[y][x].tile!!)
                    board[y][x].tile = null
                }
            }
            var count = 0;
            while(stack.isNotEmpty()){
                if(count == 0) {
                    board[y][board.size-1].tile = stack.get(0);
                    stack.removeAt(0)
                }
                else{
                    if(resolveMerge(board[y][board.size-count].tile!!, stack.get(0))){
                        stack.removeAt(0);
                        count--;
                    }
                    else{
                        board[y][board.size-1 - count].tile = stack.get(0);
                        stack.removeAt(0);
                    }
                }
                count++;
            }
        }
    }

    private fun moveWest(){
        for (y in 0 until board.size){
            var stack = ArrayList<Tile>();
            for(x in 0 until board.size){
                if(board[y][x].tile != null){
                    board[y][x].tile!!.animation = Tile.ANIMATION_WEST;
                    stack.add(board[y][x].tile!!)
                    board[y][x].tile = null
                }
            }
            var count = 0;
            while(stack.isNotEmpty()){
                if(count == 0) {
                    board[y][0].tile = stack.get(0);
                    stack.removeAt(0)
                }
                else{
                    if(resolveMerge(board[y][count-1].tile!!, stack.get(0))){
                        stack.removeAt(0);
                        count--;
                    }
                    else{
                        board[y][count].tile = stack.get(0);
                        stack.removeAt(0);
                    }
                }
                count++;
            }
        }
    }

    private fun moveSouth(){
        for (x in 0 until board.size){
            var stack = ArrayList<Tile>();
            for(y in board.size-1 downTo 0){
                if(board[y][x].tile != null){
                    board[y][x].tile!!.animation = Tile.ANIMATION_SOUTH;
                    stack.add(board[y][x].tile!!)
                    board[y][x].tile = null
                }
            }
            var count = 0;
            while(stack.isNotEmpty()){
                if(count == 0) {
                    board[board.size-1][x].tile = stack.get(0);
                    stack.removeAt(0)
                }
                else{
                   if(resolveMerge(board[board.size-count][x].tile!!, stack.get(0))){
                        stack.removeAt(0);
                        count--;
                    }
                    else{
                        board[board.size-1-count][x].tile = stack.get(0);
                        stack.removeAt(0);
                    }
                }
                count++;
            }
        }
    }

    private fun moveNorth(){
        for (x in 0 until board.size){
            var stack = ArrayList<Tile>();
            for(y in 0 until board.size){
                if(board[y][x].tile != null){
                    board[y][x].tile!!.animation = Tile.ANIMATION_NORTH;
                    stack.add(board[y][x].tile!!)
                    board[y][x].tile = null
                }
            }
            var count = 0;
            while(stack.isNotEmpty()){
                if(count == 0) {
                    board[0][x].tile = stack.get(0);
                    stack.removeAt(0)
                }
                else{
                    if(resolveMerge(board[count-1][x].tile!!, stack.get(0))){
                        stack.removeAt(0);
                        count--;
                    }
                    else{
                        board[count][x].tile = stack.get(0);
                        stack.removeAt(0);
                    }
                }
                count++;
            }
        }
    }

    private fun resolveMerge(staticTile: Tile, incomingTile: Tile): Boolean {
        if(staticTile.value == incomingTile.value){
            staticTile.doubleValue()
            return true;
        }
        return false;
    }

    private fun loseGame(){
        hasLost = true;
        board.clear();
    }


    fun print(){
        for (row in board){
            for (cell in row){
                print(cell.getPrintable())
            }
            println()
        }
    }
}