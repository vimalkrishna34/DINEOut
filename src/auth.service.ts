import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home']); // Navigate to a protected page
    } catch (error) {
      console.error(error);
      alert('Login failed: ' );
    }
  }

  async register(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['/home']); // Navigate after successful registration
    } catch (error) {
      console.error(error);
      alert('Registration failed: ' );
    }
  }

  logout(): void {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.afAuth.authState.pipe().toPromise().then(user => !!user);
  }
}
