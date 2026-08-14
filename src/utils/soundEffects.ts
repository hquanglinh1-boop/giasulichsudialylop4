// Web Audio API Sound Synthesizer for Quiz Effects (Correct answer fanfare, wrong chime, victory parade)

class SoundFX {
  private ctx: AudioContext | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play upbeat victory chime for correct answer (+10 pts)
  playCorrectSound() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Play C5 -> E5 -> G5 -> C6 happy chord arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.25, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Play gentle low chime for incorrect answer
  playIncorrectSound() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.3); // Slide down

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Play grand celebratory fanfare on quiz completion
  playVictoryFanfare() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Trumpet melody: C5, E5, G5, C6 (long), G5 (short), C6 (triumphant)
      const melody = [
        { f: 523.25, d: 0.15, time: 0 },
        { f: 659.25, d: 0.15, time: 0.15 },
        { f: 783.99, d: 0.15, time: 0.30 },
        { f: 1046.50, d: 0.40, time: 0.45 },
        { f: 783.99, d: 0.15, time: 0.90 },
        { f: 1046.50, d: 0.60, time: 1.05 },
      ];

      melody.forEach((note) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(note.f, now + note.time);

        gain.gain.setValueAtTime(0.18, now + note.time);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.time + note.d + 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + note.time);
        osc.stop(now + note.time + note.d + 0.15);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }
}

export const soundFx = new SoundFX();
