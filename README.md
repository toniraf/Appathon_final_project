# Project COVID-01
## :pill: Περιγραφή
Σκόπος είναι να φτιάξουμε μια δικτυακή εφαρμογή η οποία παρουσιάζει τους δέκα συγγραφείς με τα περισσότερα άρθρα γύρω από ένα συγκεκριμένο φάρμακο. To input θα είναι το όνομα του φαρμάκου και το output θα είναι οι 10 συγγραφείς με τα περισσότερα άρθρα και ποια είναι αυτά. Για την αναζήτηση του φαρμάκου θα προσπελάσουμε τα δεδομένα που υπάρχουν στον τίτλο και το abstract. Επίσης για καθέναν από τους δέκα αυτούς συγγραφείς, θα παρουσιάζουμε
την χρονική περίοδο στην οποία έχουν γίνει οι δημοσιεύσεις τους.\
Για τις ανάγκες της εργασίας αυτής θα χρειαστεί να κατεβάσουμε την τελευταία έκδοση του dataset με όλα τα διαθέσιμα άρθρα και να επεξεργαστούμε τα δεδομένα που υπάρχουν στο CSV αρχείο με την συνοπτική τους παρουσίαση.\
Τα διαθέσιμα άρθρα βρίσκονται εδώ: https://www.semanticscholar.org/cord19

 ## :flashlight: Υλοποίηση
 ### Βάση δεδομένων
 Τα δεδομένα που ήταν σε csv μορφή, αφού τα φιλτράραμε κατάλληλα ([data-cleaning](https://en.wikipedia.org/wiki/Data_cleansing#:~:text=Data%20cleansing%20or%20data%20cleaning,the%20dirty%20or%20coarse%20data.)), περάστηκαν σε μία MySQL βάση δεδομένων.

### Backend
Το backend υλοποιήθηκε με Node.js. Και για τo REST API χρησιμοποιήθηκε το web framework της Node, Express.js.

### Frontend
Για το frontend έγινε χρήση της javaScript, HTML και CSS.

## :wrench: Οδηγίες Εγκατάστασης
### Για την βάση δεδομένων
Αρχικά ξεκινάμε τον MySQL server στο τοπικό μας μηχάνημα. Αφού εκτελέσουμε την παρακάτω εντολή,
```
git clone https://github.com/toniraf/Appathon_final_project.git
```
μεταβαίνουμε στο φάκελο [Database](https://github.com/toniraf/Appathon_final_project/tree/master/Database) του repository μας, ανοίγουμε ένα command prompt μέσα στο φάκελο και εκτελούμε την εξής εντολή για την εγκατάσταση της βάσης:
```
mysql -u root -p < Mydatabase.sql
```
### Για τον server 
Για την εγκατάσταση και εκτέλεση του κώδικα δίνουμε τις εξής εντολές:
```
cd Final_project_Covid1/

npm install 

node db.js 
```
Aφού εκτελεστούν τα παραπάνω, το site θα είναι διαθέσιμο στο [http://localhost:3000](http://localhost:3000).

## :video_camera: Βίντεο Παρουσίασης
[https://youtu.be/r7VCCimipkw](https://youtu.be/r7VCCimipkw).

