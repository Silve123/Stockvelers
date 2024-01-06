const data = await getDocs(stockvelsCollectionRef);
        const filteredData = data.docs
          .map(doc => ({
            ...doc.data(),
            id: doc.id,
          }))
          .filter(stockvel => {
            const members = stockvel.members;
            return members && members[userEmailAddress];
          });
        setStockvels(filteredData);
// Savings
String type
Boolean active
Number current_cycle
String description
String name
Number balance
Map rules{
    Number contribution
    String interval
    Timestamp payout
    Number people
}
Map members{
    Map {useremail}{
        Boolean paid
    }
}

// Rotational
String type
Boolean active
Number current_cycle
String description
String name
Number balance
Map rules{
    Number contribution
    String interval
    Number people
}
Map members{
    Map {useremail}{
        Number cycle
        Boolean paid
    }
}