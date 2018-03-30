function quickSort(arr,i=0,d=arr.length-2){
	if(i>d) return arr;
	var pivot = arr.pop();
	while(i < d){
		while(arr[i]<=pivot && i != d) i++;
		while(arr[d]>=pivot && i != d) d--;
		var t = arr[i];
		arr[i] = arr[d];
		arr[d] = t;
	}
	if(arr[i]<=pivot)i++;
	arr.splice(i,0,pivot);
	return [].concat(	quickSort(arr.slice(0,i)),
						quickSort(arr.slice(i,arr.length)));
}

module.exports.quickSort = quickSort;