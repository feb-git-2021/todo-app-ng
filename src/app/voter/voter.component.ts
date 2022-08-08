
import  { EventEmitter,Component,OnInit, Input,Output} from '@angular/core'; 

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']

})
export class VoterComponent implements OnInit { 
   othersVote=20;
   myVote=2
  @Output() myVoteChanged = new EventEmitter();
  totalVotes = 0; 
  voteChanged = new EventEmitter();
  

  ngOnInit():void{

  }

  
    upVote(){
      if (this.myVote == 1)
          return;
      
      this.myVote++;

      this.myVoteChanged.emit({ myVote: this.myVote });
      console.log(`up arrow clicked....`)
  }
  
  downVote() { 
    if (this.myVote == -1)
            return;
            
        this.myVote--;
        
        this.myVoteChanged.emit({ myVote: this.myVote });
        console.log(`down arrow clicked....`)
  }
  getTotalVotes() { 
    
    this.totalVotes= this.othersVote + this.myVote;
    console.log(this.totalVotes)
  }
}