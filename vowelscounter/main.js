let matchingInstances = text.match(/[aeiou]/gi);

    
    if (matchingInstances) {
        
        return matchingInstances.length
    } else {
        return 0
    }