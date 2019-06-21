# Ejercicios React Redux
___

### Ejercicio 3: Burger builder con recibo

Se te ha entregado una aplicación para crear hamburguesas, pero
no está funcionando correctamente.

Hay dos componentes que están conectados por medio de Redux: Builder y Receipt.

Ambos se conectan a un reducer que contiene un arreglo con el precio de cada
hamburguesa que se ha agregado, pero la acción addBurger no se está disparando
correctamente.

Tu tarea es reparar el "dispatch" de la acción para que los precios de las
hamburguesas agregadas se puedan ver en el recibo.

TIP: La acción debe de contener ademas del "type" información relevante
para el recibo.

**Bonus**

1. Mostrar en el Builder el total que se lleva en la cuenta.
2. Agregar un botón para resetear el recibo completo.