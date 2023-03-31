//Solution for 5kyu pagination helper
//Link to kata: https://www.codewars.com/kata/515bb423de843ea99400000a/javascript

class PaginationHelper {
	constructor(collection, itemsPerPage) {
	    this.collection = collection
      this.itemsPerPage = itemsPerPage 
	}
	itemCount() {
    return this.collection.length
  }
	pageCount() {
      return Math.ceil(this.collection.length / this.itemsPerPage)
  }
	pageItemCount(pageIndex) {
     if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1
      else if (pageIndex + 1 === this.pageCount()) {
       return this.collection.length % this.itemsPerPage === 0 ? this.itemsPerPage : this.collection.length % this.itemsPerPage
      }
        else {
            return this.itemsPerPage
        }
	}
	pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) return -1
    else return Math.floor(itemIndex / this.itemsPerPage)
	
	}
}