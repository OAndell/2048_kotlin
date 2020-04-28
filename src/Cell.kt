
class Cell(x :Int, y: Int){
    var tile: Tile? = null;

    fun getPrintable(): String? {
        if (tile != null){
            return " " + tile!!.value.toString() + " ";
        }
        return "  "
    }

    fun getColor(): String{
        if(tile == null){
            return "#aba9a4"
        }
        when (tile!!.value) {
            2 -> return "#f7f5ed"
            4 -> return "#f2e8bd"
            8 -> return "#f0a067"
            16 -> return "#f06f13"
            32 -> return "#f05213"
            64 -> return "#c43800"
            128 -> return "#f2f763"
            256 -> return "#fcf405"
            else -> {
                return "#ff0303"
            }
        }
    }
}