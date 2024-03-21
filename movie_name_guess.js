import java.util.Random;
import java.util.Scanner;

public class MovieGuessingGame {
    public static void main(String[] args) {
        String[] movies = {"titanic", "avatar", "inception", "jaws", "casablanca", "rocky", "forrest gump", "pulp fiction", "matrix", "gladiator"};

        Random random = new Random();
        String selectedMovie = movies[random.nextInt(movies.length)];
        char[] guessedLetters = new char[selectedMovie.length()];
        for (int i = 0; i < selectedMovie.length(); i++) {
            guessedLetters[i] = '_';
        }

        Scanner scanner = new Scanner(System.in);
        boolean movieGuessed = false;
        int attempts = 0;

        System.out.println("Welcome to the Movie Guessing Game!");
        System.out.println("Guess the name of the movie by entering one letter at a time.");
        System.out.println("You have " + (selectedMovie.length() + 2) + " attempts.");

        while (!movieGuessed && attempts < selectedMovie.length() + 2) {
            System.out.println("Current Progress: " + String.valueOf(guessedLetters));

            System.out.print("Enter a letter: ");
            char guess = scanner.next().charAt(0);

            boolean correctGuess = false;
            for (int i = 0; i < selectedMovie.length(); i++) {
                if (selectedMovie.charAt(i) == guess) {
                    guessedLetters[i] = guess;
                    correctGuess = true;
                }
            }

            if (!correctGuess) {
                System.out.println("Incorrect guess.");
                attempts++;
            }

            if (String.valueOf(guessedLetters).equals(selectedMovie)) {
                movieGuessed = true;
            }
        }

        if (movieGuessed) {
            System.out.println("Congratulations! You've guessed the movie: " + selectedMovie);
        } else {
            System.out.println("You've run out of attempts. The movie was: " + selectedMovie);
        }

        scanner.close();
    }
}

