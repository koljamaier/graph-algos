export abstract class IntSet {
    abstract incl(elem: number, x: number, y: number): IntSet 
    abstract contains(x: number): boolean
    public x: number
    public y: number

}

export class Empty extends IntSet {
    incl(elem: number, x: number, y: number): IntSet {
        return new NonEmpty(elem, new Empty, new Empty, x, y)
    }

    contains(x: number): boolean {
        return false
    }
}

export class NonEmpty extends IntSet {
    public elem: number
    public left: IntSet
    public right: IntSet

    constructor(elem, left, right, x?, y?) {
        super()
        this.elem = elem
        this.left = left
        this.right = right
        this.x = x
        this.y = y
    }

    incl(elem: number, x: number, y: number): IntSet {
       if(elem <= this.elem) {
        //let left = 
        return new NonEmpty(this.elem, this.left.incl(elem, this.x-100, this.y+100), this.right, this.x, this.y)
        //left.x = this.x - 100
        //left.y = this.y + 100
        //return new NonEmpty(this.elem, left, this.right)
       }

       if(elem > this.elem) {
        return new NonEmpty(this.elem, this.left, this.right.incl(elem, this.x+100, this.y+100), this.x, this.y)
        //let right = this.right.incl(x)
        //right.x = this.x + 100
        //right.y = this.y + 100    
        //return new NonEmpty(this.elem, this.left, right)
        }
    }

    contains(x: number): boolean {
        if(x < this.elem) return this.left.contains(x) 
        if(x > this.elem) return this.right.contains(x) 
        else return true
    }
}





