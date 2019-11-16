export class AsyncFileReader {
  input: HTMLInputElement;
  boundListener!: (this: AsyncFileReader) => void;

  constructor() {
    // Create the input to upload a file
    const element: HTMLElement = document.createElement('INPUT');
    this.input = element as HTMLInputElement;
    this.input.setAttribute('type', 'file');
  }

  click(): Promise<string> {
    return new Promise<string>((resolve, _) => {
      this.boundListener = this.onChange.bind(this, resolve);
      this.input.addEventListener('change', this.boundListener);
      this.input.click();
    });
  }

  private onChange(this: AsyncFileReader, resolve: (value?: string) => void): void {
    if (this.input.files && this.input.files.length === 1) {
      const file = this.input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          resolve(e.target.result as string);
        } else {
          resolve('');
        }

        this.input.removeEventListener('change', this.boundListener);
      }

      reader.readAsText(file);
    }
  }

  dispose() {
    this.input.remove();
  }
}