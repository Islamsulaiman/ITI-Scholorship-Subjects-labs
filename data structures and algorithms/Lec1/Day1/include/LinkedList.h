#ifndef LINKEDLIST_H
#define LINKEDLIST_H

typedef struct node node;

struct node
{
    int data;
    node *prev, *next;
};

typedef struct linkedList
{
    node *head, *tail;

}linkedList;

//node *head = NULL, *tail = NULL;  //head and tail is global variables

/*void Add(LinkedList *L, int data)
{
    L->head
}*/

void initHeadTail(linkedList * ls) {
    ls->head = ls ->tail = NULL; //initialize head and tail for new LS to null
}

node * createNode(int data){  //create new node at the heap
    //create new node
    node * newNode = (node *) malloc(sizeof(node));
    newNode->data = data;
    newNode->next = newNode->prev = NULL;

    return newNode;
}


void append(int data, linkedList * ls){    //append to the end

    //create new node
    node * newNode = createNode(data);


    //if the first node
    if(ls->head == NULL){   //no other nodes there. ls->head because ls is a struct that contains head an tail and this is how to access it

        ls->head = ls->tail = newNode; //make head point to the first node

    }else{  //if last node

        ls->tail->next = newNode;
        newNode ->prev = ls->tail;
        ls->tail = newNode;

    }
}

void display(linkedList * ls){

    //create temp node to move with the loop
    node * temp = ls->head; //to start with the head of th LS


    // no nodes yet
    if(ls->head == NULL){

        printf("Please insert nodes first\n");
        return;

    }else{  //loop over nodes until the last one

        while(temp != NULL){  //while there is another node next


            printf("%d ", temp->data); //display the next node data
            temp = temp ->next;


        }
    }
}


node * getNodeByIndex(linkedList * ls, int index) {

    int counter = 1;
    node *temp = (node *) malloc (sizeof(node));

    if(temp == NULL){   //if there's no space at the memory.
        printf("no space at the memory");
        return;
    }
    temp = ls->head;    //after malloc give space, assign temp to head.

    //if no node inside
    if(ls->head == NULL){

        printf("add nods first\n");
        return temp;
    }

    //if there's node
    while(temp != NULL){
        if(counter == index){
            //printf("%d\n", temp->data);
            return temp;        //return the address of the current node
        }
        temp = temp->next;
        counter ++;
    }
    free(temp);     //to free its space after done with it
}



void removeNode(linkedList * ls, int index){

    node *temp = getNodeByIndex(ls, index);

    //if no node inside
    if(ls->head == NULL){

        printf("add node first\n");
        return;
    }

    //if there's node
    //while(temp != NULL){

        //if we delete the first node
        if(ls->head == temp){   //head points to the first node

            if(ls->head == ls->tail){   //only one node

                ls->head = ls->tail = NULL;

            }else{  //node at the start but not only one.

                ls->head = ls->head->next;
                ls->head->prev = NULL;
            }

            ls->head = temp->next;  //make head points to the next node
            temp->next->prev = NULL;    //make next node prev pointers Point to nothing because it the first pointer now.
            return;

        }

        //if we delete the last node
        else if(ls->tail = temp){

            ls->tail = temp->prev;
            temp->prev->next = NULL;
            return;
        }

        //if we delete node in the middle
        else{
            printf("else\n");

            printf("next1 : %d\n",temp->next->data);
            temp->next->prev = temp ->prev;

            printf("next1 : %d\n",temp->next->data);

            temp->prev->next = temp ->next;
            printf("next1 : %d\n",temp->next->data);


            //temp->prev = NULL;
            //temp->next = NULL;
            //return;
        }
    //}
    free(temp);     //to free its space after done with it
}




















































/*

void Add(int data)
{
    Node *newNode = malloc(sizeof(Node));
    newNode->Data = data;
    newNode->Prev = newNode->Next = NULL;

    if(head == NULL)    //if there's no nodes yet
    {
        head = tail = newNode;
    }
    else        //adding at the middele
    {
         ->Next = newNode;
        newNode->Prev = tail;
        tail = newNode;
    }
}

void Display()
{
    Node *current = head;

    while(current != NULL)
    {
        printf("%d   ", current->Data);
        current = current->Next;
    }
}

Node* GetNodeByData(int data)
{
    Node *current = head;

    while(current != NULL)
    {
        if(data == current->Data)
            return current;

        current = current->Next;
    }

    return NULL;
}

void Remove(int data)
{
    Node *node = GetNodeByData(data);

    if(node == NULL)
        return;

    if(node == head)
    {
        if(head == tail)
        {
            head = tail = NULL;
        }
        else
        {
            head = head->Next;
            head->Prev = NULL;
        }
    }
    else if(node == tail)
    {
        tail = tail->Prev;
        tail->Next = NULL;
    }
    else
    {
        //Node *A = node->Prev;
        //Node *B = node->Next;

        //A->Next = B;
        //B->Prev = A;

        node->Prev->Next = node->Next;
        node->Next->Prev = node->Prev;
    }

    free(node);
}



void InsertAfter(int data, int afterData){

    //create new node.
    Node *newNode = malloc(sizeof(Node));
    newNode->Data = data;

    //get the previous node using the GetNodeByData func
    Node * prevNode = GetNodeByData(afterData);

    //if we add at the middle.
    if(prevNode -> Next != NULL){
        newNode ->Next = prevNode ->Next ;    // the next point to the new node first, should be done first.

        prevNode ->Next = newNode;    //make the pre

        return;
    }
    // if we added at the end of the L.S.
    else if(prevNode -> Next == NULL ){  //at the end

        tail = newNode;
        prevNode ->Next = newNode;

        return;

    }

};


int GetCount(){
    int counter = 1;
    Node * temp = head;


    while(temp -> Next != NULL){

        temp = temp -> Next;
        counter ++;

    }

    printf("The counter is %d\n", counter);

    return counter;
};



int GetDataByIndex(int index){

    int counter = 0;    //this represents the node I am at
    Node * temp = head;

    while(temp -> Next != NULL){


        if(counter == index){
            printf("the data of node at index %d = %d\n", counter, temp -> Data);
            return;

        }
        counter ++;     //to move to the next nodfe;

        temp = temp -> Next;    //to increment temp
    }
    if (temp -> Next == NULL){
        printf("You exceded the linked list length\n");
    }

};

*/

#endif // LINKEDLIST_H
