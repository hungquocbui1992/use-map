const himset = new set (['tiger','lion','elephant','panther','fox','tiger','elephant'])
console.log(himset)//{'tiger','lion','elephant','fox'}
himset.add('wolf').add('rhino')
console.log(himset)//(['tiger','lion','elephant','panther','fox','wolf','rhino'])
console.log(himset.size)//7


himset.has(2)//true