#include <stdio.h>
#include <stdlib.h>

//stack using linked lists
typedef struct node node;

 struct node {

    int data;
    node * next;

};

typedef struct linkedlist{

    node * head;    //head always will be with the new added node

}linkedlist;


void push(linkedlist * ls, int data);
node * createNode(int data);
void initLs(linkedlist * ls);
//node * getNodeByIndex(linkedlist * ls, int index);
void display(linkedlist * ls);
int pop(linkedlist * ls);




int main()
{
    linkedlist L1;
    initLs(&L1);


    push(&L1, 5);
    push(&L1, 6);
    push(&L1, 7);
    push(&L1, 8);

    display(&L1);

    pop(&L1);

    display(&L1);






    return 0;
}

void initLs(linkedlist * ls) {
    ls->head = NULL; //initialize head and tail for new LS to null
}


node * createNode(int data){  //create new node at the heap
    //create new node
    node * newNode = (node *) malloc(sizeof(node));

    if(newNode == NULL){    //means that there's no space at the heap and malloc could'nt give space

        printf("Stack overflow\n");
        exit(1);    //exit from exit link
    }

    newNode->data = data;
    newNode->next = NULL;

    return newNode;
}


void push(linkedlist * ls, int data){
    //create new node
    node * newNode = createNode(data);

    //if this is the 1st node to add
    if(ls->head == NULL){

        ls->head = newNode;
    }
    //if not the first node
    else{


        //ls->head->next = newNode;   //previous node next ptr ,point to the new node
        newNode -> next = ls->head;
        ls->head = newNode;         // head point to newNode now
    }
}

int pop(linkedlist * ls){  //pop the last entered node

    //create temp pointer to point to the deleted node
    node * temp = ls->head;     //because we always deleting the node that head is pointing to first

    //if the LS is empty
    if(temp == NULL){
        printf("please add node first\n");
        free(temp);
        return 0;

    }

    else if(temp->next == NULL ){     //if this is the last node, because always the first node added next ptr is null

        int tempVar = temp->data;  //to be ruturned to user

        ls->head = NULL;    //to make head
        free(temp);     //to delete the node pointed to by temp.

        return(tempVar);

    }

    else if(temp->next != NULL){      //if not the last node.

        int tempVar = temp->data;  //to be ruturned to user

        ls->head = ls->head->next;     //make head move back one node

        free(temp);
        temp = NULL;

        return tempVar;
    }
}


void display(linkedlist * ls){

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
    printf("\n");
}

