if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module '2048_kotlinjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to '2048_kotlinjs'.");
}
this['2048_kotlinjs'] = function (_, Kotlin) {
  'use strict';
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var println = Kotlin.kotlin.io.println;
  var println_0 = Kotlin.kotlin.io.println_s8jyv4$;
  function Board(size) {
    this.DIRECTION_SOUTH = 'SOUTH';
    this.DIRECTION_NORTH = 'NORTH';
    this.DIRECTION_WEST = 'WEST';
    this.DIRECTION_EAST = 'EAST';
    this.board = ArrayList_init();
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$ = until(0, size);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
      this.board.add_11rb$(ArrayList_init());
      tmp$_3 = until(0, size);
      tmp$_4 = tmp$_3.first;
      tmp$_5 = tmp$_3.last;
      tmp$_6 = tmp$_3.step;
      for (var j = tmp$_4; j <= tmp$_5; j += tmp$_6) {
        this.board.get_za3lpa$(i).add_11rb$(new Cell(i, j));
      }
    }
    this.addNewTile();
  }
  Board.prototype.move_61zpoe$ = function (direction) {
    if (Kotlin.equals(direction, this.DIRECTION_EAST)) {
      this.moveEast_0();
    }
     else if (Kotlin.equals(direction, this.DIRECTION_WEST)) {
      this.moveWest_0();
    }
     else if (Kotlin.equals(direction, this.DIRECTION_NORTH)) {
      this.moveNorth_0();
    }
     else if (Kotlin.equals(direction, this.DIRECTION_SOUTH)) {
      this.moveSouth_0();
    }
    this.addNewTile();
  };
  Board.prototype.addNewTile = function () {
    var tmp$, tmp$_0, tmp$_1;
    var emptyCells = ArrayList_init();
    tmp$ = this.board.iterator();
    while (tmp$.hasNext()) {
      var row = tmp$.next();
      tmp$_0 = row.iterator();
      while (tmp$_0.hasNext()) {
        var cell = tmp$_0.next();
        if (cell.tile == null) {
          emptyCells.add_11rb$(cell);
        }
      }
    }
    var randomIndex = Math.random() * (emptyCells.size - 1 | 0) + 1 | 0;
    emptyCells.get_za3lpa$(randomIndex).tile = new Tile();
    ((tmp$_1 = emptyCells.get_za3lpa$(randomIndex).tile) != null ? tmp$_1 : Kotlin.throwNPE()).animation = Tile$Companion_getInstance().ANIMATION_POPIN;
  };
  Board.prototype.moveEast_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$ = until(0, this.board.size);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var y = tmp$_0; y <= tmp$_1; y += tmp$_2) {
      var stack = ArrayList_init();
      tmp$_3 = downTo(this.board.size - 1 | 0, 0).iterator();
      while (tmp$_3.hasNext()) {
        var x = tmp$_3.next();
        if (this.board.get_za3lpa$(y).get_za3lpa$(x).tile != null) {
          ((tmp$_4 = this.board.get_za3lpa$(y).get_za3lpa$(x).tile) != null ? tmp$_4 : Kotlin.throwNPE()).animation = Tile$Companion_getInstance().ANIMATION_EAST;
          stack.add_11rb$((tmp$_5 = this.board.get_za3lpa$(y).get_za3lpa$(x).tile) != null ? tmp$_5 : Kotlin.throwNPE());
          this.board.get_za3lpa$(y).get_za3lpa$(x).tile = null;
        }
      }
      var count = 0;
      while (!stack.isEmpty()) {
        if (count === 0) {
          this.board.get_za3lpa$(y).get_za3lpa$(this.board.size - 1 | 0).tile = stack.get_za3lpa$(0);
          stack.removeAt_za3lpa$(0);
        }
         else {
          if (this.resolveMerge_0((tmp$_6 = this.board.get_za3lpa$(y).get_za3lpa$(this.board.size - count | 0).tile) != null ? tmp$_6 : Kotlin.throwNPE(), stack.get_za3lpa$(0))) {
            stack.removeAt_za3lpa$(0);
            count = count - 1 | 0;
          }
           else {
            this.board.get_za3lpa$(y).get_za3lpa$(this.board.size - 1 - count | 0).tile = stack.get_za3lpa$(0);
            stack.removeAt_za3lpa$(0);
          }
        }
        count = count + 1 | 0;
      }
    }
  };
  Board.prototype.moveWest_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    tmp$ = until(0, this.board.size);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var y = tmp$_0; y <= tmp$_1; y += tmp$_2) {
      var stack = ArrayList_init();
      tmp$_3 = until(0, this.board.size);
      tmp$_4 = tmp$_3.first;
      tmp$_5 = tmp$_3.last;
      tmp$_6 = tmp$_3.step;
      for (var x = tmp$_4; x <= tmp$_5; x += tmp$_6) {
        if (this.board.get_za3lpa$(y).get_za3lpa$(x).tile != null) {
          ((tmp$_7 = this.board.get_za3lpa$(y).get_za3lpa$(x).tile) != null ? tmp$_7 : Kotlin.throwNPE()).animation = Tile$Companion_getInstance().ANIMATION_WEST;
          stack.add_11rb$((tmp$_8 = this.board.get_za3lpa$(y).get_za3lpa$(x).tile) != null ? tmp$_8 : Kotlin.throwNPE());
          this.board.get_za3lpa$(y).get_za3lpa$(x).tile = null;
        }
      }
      var count = 0;
      while (!stack.isEmpty()) {
        if (count === 0) {
          this.board.get_za3lpa$(y).get_za3lpa$(0).tile = stack.get_za3lpa$(0);
          stack.removeAt_za3lpa$(0);
        }
         else {
          if (this.resolveMerge_0((tmp$_9 = this.board.get_za3lpa$(y).get_za3lpa$(count - 1 | 0).tile) != null ? tmp$_9 : Kotlin.throwNPE(), stack.get_za3lpa$(0))) {
            stack.removeAt_za3lpa$(0);
            count = count - 1 | 0;
          }
           else {
            this.board.get_za3lpa$(y).get_za3lpa$(count).tile = stack.get_za3lpa$(0);
            stack.removeAt_za3lpa$(0);
          }
        }
        count = count + 1 | 0;
      }
    }
  };
  Board.prototype.moveSouth_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$ = until(0, this.board.size);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var x = tmp$_0; x <= tmp$_1; x += tmp$_2) {
      var stack = ArrayList_init();
      tmp$_3 = downTo(this.board.size - 1 | 0, 0).iterator();
      while (tmp$_3.hasNext()) {
        var y = tmp$_3.next();
        if (this.board.get_za3lpa$(y).get_za3lpa$(x).tile != null) {
          ((tmp$_4 = this.board.get_za3lpa$(y).get_za3lpa$(x).tile) != null ? tmp$_4 : Kotlin.throwNPE()).animation = Tile$Companion_getInstance().ANIMATION_SOUTH;
          stack.add_11rb$((tmp$_5 = this.board.get_za3lpa$(y).get_za3lpa$(x).tile) != null ? tmp$_5 : Kotlin.throwNPE());
          this.board.get_za3lpa$(y).get_za3lpa$(x).tile = null;
        }
      }
      var count = 0;
      while (!stack.isEmpty()) {
        if (count === 0) {
          this.board.get_za3lpa$(this.board.size - 1 | 0).get_za3lpa$(x).tile = stack.get_za3lpa$(0);
          stack.removeAt_za3lpa$(0);
        }
         else {
          if (this.resolveMerge_0((tmp$_6 = this.board.get_za3lpa$(this.board.size - count | 0).get_za3lpa$(x).tile) != null ? tmp$_6 : Kotlin.throwNPE(), stack.get_za3lpa$(0))) {
            stack.removeAt_za3lpa$(0);
            count = count - 1 | 0;
          }
           else {
            this.board.get_za3lpa$(this.board.size - 1 - count | 0).get_za3lpa$(x).tile = stack.get_za3lpa$(0);
            stack.removeAt_za3lpa$(0);
          }
        }
        count = count + 1 | 0;
      }
    }
  };
  Board.prototype.moveNorth_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    tmp$ = until(0, this.board.size);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var x = tmp$_0; x <= tmp$_1; x += tmp$_2) {
      var stack = ArrayList_init();
      tmp$_3 = until(0, this.board.size);
      tmp$_4 = tmp$_3.first;
      tmp$_5 = tmp$_3.last;
      tmp$_6 = tmp$_3.step;
      for (var y = tmp$_4; y <= tmp$_5; y += tmp$_6) {
        if (this.board.get_za3lpa$(y).get_za3lpa$(x).tile != null) {
          ((tmp$_7 = this.board.get_za3lpa$(y).get_za3lpa$(x).tile) != null ? tmp$_7 : Kotlin.throwNPE()).animation = Tile$Companion_getInstance().ANIMATION_NORTH;
          stack.add_11rb$((tmp$_8 = this.board.get_za3lpa$(y).get_za3lpa$(x).tile) != null ? tmp$_8 : Kotlin.throwNPE());
          this.board.get_za3lpa$(y).get_za3lpa$(x).tile = null;
        }
      }
      var count = 0;
      while (!stack.isEmpty()) {
        if (count === 0) {
          this.board.get_za3lpa$(0).get_za3lpa$(x).tile = stack.get_za3lpa$(0);
          stack.removeAt_za3lpa$(0);
        }
         else {
          if (this.resolveMerge_0((tmp$_9 = this.board.get_za3lpa$(count - 1 | 0).get_za3lpa$(x).tile) != null ? tmp$_9 : Kotlin.throwNPE(), stack.get_za3lpa$(0))) {
            stack.removeAt_za3lpa$(0);
            count = count - 1 | 0;
          }
           else {
            this.board.get_za3lpa$(count).get_za3lpa$(x).tile = stack.get_za3lpa$(0);
            stack.removeAt_za3lpa$(0);
          }
        }
        count = count + 1 | 0;
      }
    }
  };
  Board.prototype.resolveMerge_0 = function (staticTile, incomingTile) {
    if (staticTile.value === incomingTile.value) {
      staticTile.doubleValue();
      return true;
    }
    return false;
  };
  Board.prototype.print = function () {
    var tmp$, tmp$_0;
    tmp$ = this.board.iterator();
    while (tmp$.hasNext()) {
      var row = tmp$.next();
      tmp$_0 = row.iterator();
      while (tmp$_0.hasNext()) {
        var cell = tmp$_0.next();
        print(cell.getPrintable());
      }
      println();
    }
  };
  Board.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Board',
    interfaces: []
  };
  function Cell(x, y) {
    this.tile = null;
  }
  Cell.prototype.getPrintable = function () {
    var tmp$;
    if (this.tile != null) {
      return ' ' + Kotlin.toString(((tmp$ = this.tile) != null ? tmp$ : Kotlin.throwNPE()).value) + ' ';
    }
    return '  ';
  };
  Cell.prototype.getColor = function () {
    var tmp$, tmp$_0;
    if (this.tile == null) {
      return '#aba9a4';
    }
    tmp$_0 = ((tmp$ = this.tile) != null ? tmp$ : Kotlin.throwNPE()).value;
    if (tmp$_0 === 2)
      return '#f7f5ed';
    else if (tmp$_0 === 4)
      return '#f2e8bd';
    else if (tmp$_0 === 8)
      return '#f0a067';
    else if (tmp$_0 === 16)
      return '#f06f13';
    else if (tmp$_0 === 32)
      return '#f05213';
    else if (tmp$_0 === 64)
      return '#c43800';
    else if (tmp$_0 === 128)
      return '#f2f763';
    else if (tmp$_0 === 256)
      return '#fcf405';
    else {
      return '#ff0303';
    }
  };
  Cell.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Cell',
    interfaces: []
  };
  function Tile() {
    Tile$Companion_getInstance();
    this.value = null;
    this.animation = null;
    var tmp$;
    var is2 = Math.random() * (10 + 1 - 1 | 0) + 1 | 0;
    if (is2 > 1) {
      tmp$ = 2;
    }
     else {
      tmp$ = 4;
    }
    this.value = tmp$;
    this.animation = Tile$Companion_getInstance().ANIMATION_POPIN;
  }
  function Tile$Companion() {
    Tile$Companion_instance = this;
    this.ANIMATION_NONE = 'ANIMATION_NONE';
    this.ANIMATION_POPIN = 'ANIMATION_POPIN';
    this.ANIMATION_SOUTH = 'ANIMATION_SOUTH';
    this.ANIMATION_NORTH = 'ANIMATION_NORTH';
    this.ANIMATION_WEST = 'ANIMATION_WEST';
    this.ANIMATION_EAST = 'ANIMATION_EAST';
  }
  Tile$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tile$Companion_instance = null;
  function Tile$Companion_getInstance() {
    if (Tile$Companion_instance === null) {
      new Tile$Companion();
    }
    return Tile$Companion_instance;
  }
  Tile.prototype.printNumber = function () {
    println_0(this.value);
  };
  Tile.prototype.doubleValue = function () {
    var tmp$;
    this.value = (tmp$ = this.value) != null ? tmp$ * 2 | 0 : null;
  };
  Tile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Tile',
    interfaces: []
  };
  function UI(board) {
    UI$Companion_getInstance();
    this.board = board;
    this.update();
  }
  function UI$Companion() {
    UI$Companion_instance = this;
    this.NO_ANIMATION = 'NO_ANIMATION';
    this.ANIMATION_SOUTH = 'south';
    this.ANIMATION_NORTH = 'north';
    this.ANIMATION_WEST = 'west';
    this.ANIMATION_EAST = 'east';
    this.ANIMATION_POPIN = 'popin';
  }
  UI$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UI$Companion_instance = null;
  function UI$Companion_getInstance() {
    if (UI$Companion_instance === null) {
      new UI$Companion();
    }
    return UI$Companion_instance;
  }
  UI.prototype.update = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var innerHTML = '<table>';
    tmp$ = this.board.board.iterator();
    while (tmp$.hasNext()) {
      var row = tmp$.next();
      innerHTML += '<tr>';
      tmp$_0 = row.iterator();
      while (tmp$_0.hasNext()) {
        var cell = tmp$_0.next();
        var animation = '';
        if (cell.tile != null) {
          tmp$_2 = ((tmp$_1 = cell.tile) != null ? tmp$_1 : Kotlin.throwNPE()).animation;
          if (Kotlin.equals(tmp$_2, Tile$Companion_getInstance().ANIMATION_EAST))
            animation = UI$Companion_getInstance().ANIMATION_EAST;
          else if (Kotlin.equals(tmp$_2, Tile$Companion_getInstance().ANIMATION_WEST))
            animation = UI$Companion_getInstance().ANIMATION_WEST;
          else if (Kotlin.equals(tmp$_2, Tile$Companion_getInstance().ANIMATION_NORTH))
            animation = UI$Companion_getInstance().ANIMATION_NORTH;
          else if (Kotlin.equals(tmp$_2, Tile$Companion_getInstance().ANIMATION_SOUTH))
            animation = UI$Companion_getInstance().ANIMATION_SOUTH;
          else if (Kotlin.equals(tmp$_2, Tile$Companion_getInstance().ANIMATION_POPIN))
            animation = UI$Companion_getInstance().ANIMATION_POPIN;
        }
        innerHTML += '<td>' + '<div style="background-color:' + cell.getColor() + ';' + '" class="content  ' + animation + '">' + '' + cell.getPrintable() + '<\/div>' + '<\/td>';
      }
      innerHTML += '<\/tr>';
    }
    innerHTML += '<\/table>';
    ((tmp$_3 = document.body) != null ? tmp$_3 : Kotlin.throwNPE()).innerHTML = innerHTML;
  };
  UI.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UI',
    interfaces: []
  };
  function main$lambda(closure$board, closure$ui) {
    return function (event) {
      var tmp$;
      if (Kotlin.isType(event, KeyboardEvent)) {
        tmp$ = event.keyCode;
        if (tmp$ === 87) {
          closure$board.move_61zpoe$(closure$board.DIRECTION_NORTH);
          closure$ui.update();
        }
         else if (tmp$ === 83) {
          closure$board.move_61zpoe$(closure$board.DIRECTION_SOUTH);
          closure$ui.update();
        }
         else if (tmp$ === 68) {
          closure$board.move_61zpoe$(closure$board.DIRECTION_EAST);
          closure$ui.update();
        }
         else if (tmp$ === 65) {
          closure$board.move_61zpoe$(closure$board.DIRECTION_WEST);
          closure$ui.update();
        }
      }
    };
  }
  function main(args) {
    var board = new Board(4);
    var ui = new UI(board);
    board.print();
    document.addEventListener('keydown', main$lambda(board, ui));
  }
  _.Board = Board;
  _.Cell = Cell;
  Object.defineProperty(Tile, 'Companion', {
    get: Tile$Companion_getInstance
  });
  _.Tile = Tile;
  Object.defineProperty(UI, 'Companion', {
    get: UI$Companion_getInstance
  });
  _.UI = UI;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('2048_kotlinjs', _);
  return _;
}(typeof this['2048_kotlinjs'] === 'undefined' ? {} : this['2048_kotlinjs'], kotlin);
